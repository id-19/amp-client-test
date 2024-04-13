import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import { Collapse, H4, Card } from "@blueprintjs/core";
import { Text, Paragraph } from '../../components/Common';
import mixpanel from 'mixpanel-browser'; // Assuming mixpanel-browser is installed and configured

function getId(question) {
    return question
        .replace(/[.?()]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase();
}

class FaqItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.message = React.createRef();
        this.renderItem = this.renderItem.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this); // Bind the new method
    }

    scrollToItem() {
        if (!this.message || !this.message.current) {
            return;
        }
        setTimeout(() => {
            if (!this.message || !this.message.current) {
                return;
            }
            this.message.current.scrollIntoView({ behavior: 'smooth' });
            // Track FAQ Item Viewed event
            mixpanel.track("FAQ Item Viewed", {
                "Question": this.props.question,
                "Question ID": getId(this.props.question),
                "Scroll": "True"
            });
        }, 200);
    }

    componentDidMount() {
        this.scrollToItem();
    }

    handleLinkClick() {
        // New method to handle link clicks
        mixpanel.track("FAQ Question Clicked", {
            "Question": this.props.question,
            "Question ID": getId(this.props.question)
        });
    }

    renderItem(route) {
        const { match, question, children } = this.props;
        return (
            <Container id={getId(question)} className="faq-item-container"> {/* Added className for tracking */}
                <H4>
                    <Link to={route.match ? match.url : `${match.url}/${getId(question)}`}
                          onClick={this.handleLinkClick} // Added onClick handler
                          className="faq-question-link">
                        {question}
                    </Link>
                </H4>
                <Collapse isOpen={route.match}>
                    <Card ref={this.message}>
                        <Paragraph>{children}</Paragraph>
                    </Card>
                </Collapse>
            </Container>
        );
    }

    render() {
        const { match, question } = this.props;
        return (
            <Route path={`${match.url}/${getId(question)}`}>
                {this.renderItem}
            </Route>
        );
    }
}

const Container = styled.div`
    padding: 5px 5px 0 5px;
`;

export default FaqItem;