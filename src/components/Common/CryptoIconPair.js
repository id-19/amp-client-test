import React from 'react'
import ColoredCryptoIcon from './ColoredCryptoIcon'
import styled from 'styled-components'
import mixpanel from 'mixpanel-browser'

const CryptoIconPair = ({ baseToken, quoteToken, size }) => {
    size = size || 28
    const trackHoverEvent = (tokenName, containerType) => {
        mixpanel.track(containerType === 'Quote' ? 'Quote Icon Hover' : 'Base Icon Hover', {
            Token: tokenName,
            Size: size
        });
    }
    return (
        <Container size={size}>
            <QuoteIconContainer size={size} onMouseEnter={() => trackHoverEvent(quoteToken, 'Quote')} >
                <ColoredCryptoIcon name={quoteToken} size={size} />
            </QuoteIconContainer>
            <BaseIconContainer size={size} onMouseEnter={() => trackHoverEvent(baseToken, 'Base')} >
                <ColoredCryptoIcon name={baseToken} size={size} />
            </BaseIconContainer>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: ${props => (3/2 * props.size) + "px"};
`

const BaseIconContainer = styled.div`
    position: absolute;
`

const QuoteIconContainer = styled.div`
    position: absolute;
    left: ${props => props.size / 2 + "px"};
`

export default CryptoIconPair