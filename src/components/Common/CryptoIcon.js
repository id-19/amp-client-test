import React from 'react';
import Colors from './Colors';
import AE from './Icons/black/ae.js';
import AION from './Icons/black/aion.js';
import BAT from './Icons/black/bat.js';
import BNB from './Icons/black/bnb.js';
import BTM from './Icons/black/btm.js';
import FUN from './Icons/black/fun.js';
import GNT from './Icons/black/gnt.js';
import KCS from './Icons/black/kcs.js';
import KNC from './Icons/black/knc.js';
import LOOM from './Icons/black/loom.js';
import LRC from './Icons/black/lrc.js';
import MITH from './Icons/black/mith.js';
import MKR from './Icons/black/mkr.js';
import NPXS from './Icons/black/npxs.js';
import OMG from './Icons/black/omg.js';
import PPT from './Icons/black/ppt.js';
// import PRFT from './Icons/black/prft.js';
import REP from './Icons/black/rep.js';
import SNT from './Icons/black/snt.js';
import TRX from './Icons/black/trx.js';
import TUSD from './Icons/black/tusd.js';
import WTC from './Icons/black/wtc.js';
import ZRX from './Icons/black/zrx.js';
import ETH from './Icons/black/eth.js';
import USD from './Icons/black/usd.js';
import GTC from './Icons/black/gtc.js';
import Generic from './Icons/black/generic.js';
import mixpanel from 'mixpanel-browser';
mixpanel.init('YOUR_MIXPANEL_TOKEN');

const CryptoIcon = ({ name, color = Colors.BLUE5, size = 28 }) => {
  const handleClick = () => {
    mixpanel.track('Cryptocurrency Icon Clicked', {
      'Cryptocurrency': name,
      'Color': color,
      'Size': size,
    });
  };

  switch (name) {
    // eslint-disable-next-line
    case 'AE': return <AE width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'AION': return <AION width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'BAT': return <GTC width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'BNB': return <BNB width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'BTM': return <BTM width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'FUN': return <FUN width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'GNT': return <GNT width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'KCS': return <KCS width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'KNC': return <KNC width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'LOOM': return <LOOM width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'LRC': return <LRC width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'MITH': return <MITH width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'MKR': return <MKR width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'NPXS': return <NPXS width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'OMG': return <OMG width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'PPT': return <PPT width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'USDC': return <USD width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'DAI': return <USD width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'REP': return <REP width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'SNT': return <SNT width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'TRX': return <TRX width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'TUSD': return <TUSD width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'WTC': return <WTC width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'ETH': return <ETH width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'WETH': return <ETH width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    case 'ZRX': return <ZRX width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
    default: return <Generic width={size} height={size} fill={color} viewBox="0 0 32 32" onClick={handleClick} />;
  }
};

export default CryptoIcon;