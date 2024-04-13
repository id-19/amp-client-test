import React from 'react';
import Colors from './Colors'
import AE from './Icons/icon/ae.js'
import AION from './Icons/icon/aion.js'
import BAT from './Icons/icon/bat.js'
import BNB from './Icons/icon/bnb.js'
import BTM from './Icons/icon/btm.js'
import FUN from './Icons/icon/fun.js'
import GNT from './Icons/icon/gnt.js'
import KCS from './Icons/icon/kcs.js'
import KNC from './Icons/icon/knc.js'
import LOOM from './Icons/icon/loom.js'
import LRC from './Icons/icon/lrc.js'
import MITH from './Icons/icon/mith.js'
import MKR from './Icons/icon/mkr.js'
import NPXS from './Icons/icon/npxs.js'
import OMG from './Icons/icon/omg.js'
import PPT from './Icons/icon/ppt.js'
import REP from './Icons/icon/rep.js'
import SNT from './Icons/icon/snt.js'
import TRX from './Icons/icon/trx.js'
import TUSD from './Icons/icon/tusd.js'
import WTC from './Icons/icon/wtc.js'
import ZRX from './Icons/icon/zrx.js'
import ETH from './Icons/icon/eth.js'
import DAI from './Icons/icon/dai.js'
import USD from './Icons/icon/usd.js'
import FLMI from './Icons/icon/flmi.js'
import FRECN from './Icons/icon/frecn.js'
import GTC from './Icons/icon/gtc.js'
import Generic from './Icons/icon/generic.js'
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is correctly initialized elsewhere

const ColoredCryptoIcon = ({ name, color, size }) => {
    color = color || Colors.BLUE5
    size = size || 28
    const handleClick = () => {
        Mixpanel.track("Icon Clicked", {
            "Cryptocurrency": name,
            "Action": "Icon Interaction"
        });
    };
    switch (name) {
        // eslint-disable-next-line
        case 'AE': return <AE onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'AION': return <AION onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'BAT': return <BAT onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'BNB': return <BNB onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'BTM': return <BTM onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'FUN': return <FUN onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'GNT': return <GNT onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'KCS': return <KCS onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'KNC': return <KNC onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'LOOM': return <LOOM onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'LRC': return <LRC onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'MITH': return <MITH onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'MKR': return <MKR onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'NPXS': return <NPXS onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'OMG': return <OMG onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'PPT': return <PPT onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'DAI': return <DAI onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'USDC': return <USD onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'REP': return <REP onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'SNT': return <SNT onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'TRX': return <TRX onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'TUSD': return <TUSD onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'WTC': return <WTC onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'ETH': return <ETH onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'WETH': return <ETH onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'ZRX': return <ZRX onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        case 'GTC': return <GTC onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
        default: return <Generic onClick={handleClick} width={size} height={size} viewBox="0 0 32 32" />
    }
}

export default ColoredCryptoIcon