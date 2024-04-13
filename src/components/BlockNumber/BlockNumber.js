import React from 'react'
import styled from 'styled-components'
import mixpanel from 'mixpanel-browser'
type Props = { currentBlock: number }
const BlockNumber = ({ currentBlock }: Props ) => {
    const trackEvent = () => {
        mixpanel.track("Etherscan Block Detail View", {
            "Block Number": currentBlock,
            "Action": "View Block Details",
            "Platform": "Etherscan"
        });
    }
    return (
        <Block>
            <span>Current Block: </span>
            <a href={'https://etherscan.io/block/' + currentBlock} target="_blank" onClick={trackEvent} className="currentBlockLink">
                {currentBlock}
            </a>
        </Block>
    )
}
export default BlockNumber
const Block = styled.div`
    word-wrap: break-word;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    & span {
        margin-right: 5px;
    }
`