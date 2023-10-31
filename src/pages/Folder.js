import CardList from 'components/CardList/CardList';
import FolderList from 'components/FolderList/FolderList';
import LinkAdd from 'components/LinkAdd/LinkAdd';
import MainSection from 'components/MainSection/MainSection';
import NotFoundLink from 'components/NotFoundLink/NotFoundLink';
import Search from 'components/Search/Search';
import Title from 'components/Title/Title';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllFolder, getOtherFolder, getUserFolder } from 'services/api';
import isEmpty from 'utils/isEmpty';

function Folder() {
  const [folders, setFolders] = useState(null);
  const [isFunctionButtonShow, setFunctionButtonShow] = useState(false);
  const [card, setCard] = useState([]);
  const [folderName, setFolderName] = useState('');

  const [folderParams, setFolderParams] = useSearchParams(); // setFolderParams 이걸 뭘로 해야될까요... useSearchParams에 대한 공부가 아직 더 필요한..
  const initFolderId = folderParams.get('folderId');

  const folderInfo = useCallback(async () => {
    const introResult = await getUserFolder();
    if (!introResult) return;

    const currentId = introResult.filter((data) => data.id === Number(initFolderId));

    let folderName;
    if (isEmpty(currentId)) {
      folderName = '전체';
      setFunctionButtonShow(false);
    } else {
      folderName = currentId[0].name;
      setFunctionButtonShow(true);
    }

    setFolderName(folderName);
    setFolders(introResult);
  }, [initFolderId]);

  const cardInfo = useCallback(async () => {
    const introResult = isEmpty(initFolderId) ? await getAllFolder() : await getOtherFolder(initFolderId);
    if (!introResult) return;

    setCard(introResult);
  }, [initFolderId]);

  useEffect(() => {
    folderInfo();
    cardInfo();
    return setCard([]);
  }, [folderInfo, cardInfo]);

  return (
    <>
      <LinkAdd />
      <MainSection>
        <Search />
        {folders && <FolderList folderData={folders} />}
        <Title folderName={folderName} visibleButton={isFunctionButtonShow} />
        {initFolderId && card.length === 0 ? <NotFoundLink /> : <CardList cardData={card} />}
      </MainSection>
    </>
  );
}

export default Folder;
