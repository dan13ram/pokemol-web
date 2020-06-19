import React, { useContext } from 'react';
import ThreeBoxComments from '3box-comments-react';

import { DaoDataContext, DaoServiceContext } from '../../contexts/Store';

const ProposalComments = ({
  spaceName,
  handleLogin,
  box,
  myAddress,
  currentUser3BoxProfile,
  ethereum,
  proposal,
}) => {
  const [daoData] = useContext(DaoDataContext);
  const [daoService] = useContext(DaoServiceContext);

  return (
    <ThreeBoxComments
      // required
      spaceName={spaceName}
      threadName={`${daoService.daoAddress.toLowerCase()}-${
        proposal.proposalId
      }`}
      adminEthAddr="0xBaf6e57A3940898fd21076b139D4aB231dCbBc5f"
      // Required props for context A) & B)
      box={box}
      currentUserAddr={myAddress}
      // Required prop for context B)
      loginFunction={handleLogin}
      // Required prop for context C)
      // ethereum={ethereum}

      // optional
      // members={false}
      showCommentCount={10}
      useHovers={false}
      currentUser3BoxProfile={currentUser3BoxProfile}
      userProfileURL={(address) => {
        return +daoData.version === 2
          ? `/dao/${daoData.contractAddress}/member/${daoData.contractAddress}-member-${address}`
          : `/dao/${daoData.contractAddress}/member/${daoData.contractAddress}-${address}`;
      }}
    />
  );
};

export default ProposalComments;
