import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ThreeBoxComments from '3box-comments-react';
import styled from 'styled-components';

import { DaoDataContext, DaoServiceContext } from '../../contexts/Store';

const Comments3boxReadOnly = styled.div`
  button,
  div,
  input {
    pointer-events: none;
  }
`;

export const ProposalCommentsReadOnly = ({ proposal }) => {
  const [daoData] = useContext(DaoDataContext);
  const [daoService] = useContext(DaoServiceContext);

  const history = useHistory();
  const navigateToSignIn = () => {
    history.push(`/dao/${daoService.daoAddress.toLowerCase()}/sign-in`);
  };

  return (
    <Comments3boxReadOnly onClick={navigateToSignIn}>
      <ThreeBoxComments
        // required
        spaceName={'PokeMol'}
        threadName={`${daoService.daoAddress.toLowerCase()}-${
          proposal.proposalId
        }`}
        adminEthAddr="0xBaf6e57A3940898fd21076b139D4aB231dCbBc5f"
        ethereum={daoService.web3}
        showCommentCount={10}
        useHovers={false}
        userProfileURL={(address) => {
          return +daoData.version === 2
            ? `/dao/${daoData.contractAddress}/member/${daoData.contractAddress}-member-${address}`
            : `/dao/${daoData.contractAddress}/member/${daoData.contractAddress}-${address}`;
        }}
      />
    </Comments3boxReadOnly>
  );
};

export const ProposalComments = ({ proposal, options }) => {
  const [daoData] = useContext(DaoDataContext);
  const [daoService] = useContext(DaoServiceContext);

  return (
    <ThreeBoxComments
      // required
      spaceName={'PokeMol'}
      threadName={`${daoService.daoAddress.toLowerCase()}-${
        proposal.proposalId
      }`}
      box={options.boxbox}
      currentUserAddr={options.myAddress}
      currentUser3BoxProfile={options.currentUser3BoxProfile}
      adminEthAddr="0xBaf6e57A3940898fd21076b139D4aB231dCbBc5f"
      ethereum={daoService.web3}
      showCommentCount={10}
      useHovers={false}
      userProfileURL={(address) => {
        return +daoData.version === 2
          ? `/dao/${daoData.contractAddress}/member/${daoData.contractAddress}-member-${address}`
          : `/dao/${daoData.contractAddress}/member/${daoData.contractAddress}-${address}`;
      }}
    />
  );
};
