//@flow
import getAccountBalancesDomain from '../domains';
import type { State } from '../../types';
import { useEffect } from 'react';
import Mixpanel from 'mixpanel-browser';

export default function getTokenTableSelector(state: State) {
  let accountBalancesModel = getAccountBalancesDomain(state);

  useEffect(() => {
    // Assuming Mixpanel is initialized elsewhere in the application
    Mixpanel.init('YOUR_MIXPANEL_TOKEN');
  }, []);

  const handleRefreshBalancesClick = () => {
    Mixpanel.track("Refresh Token Balances");
  };

  const handleViewTokenDetails = (tokenId) => {
    Mixpanel.track("View Token Details", { "Token ID": tokenId, "Action": "View Details" });
  };

  return (
    <>
      <button type="button" className="refresh-balances-btn" onClick={handleRefreshBalancesClick}>
        Refresh Balances
      </button>
      <table>
        <tbody>
          {accountBalancesModel.map((token, index) => (
            <tr key={index} className="token-detail-row" data-token-id={token.id} onClick={() => handleViewTokenDetails(token.id)}>
              {/* Token details */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}