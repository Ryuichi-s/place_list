import styled from "styled-components";
import { TabBodyContainer } from "./components/tab-body-container";

const ListItem = styled.div`
    padding: 8px 16px;

    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`

export const List = ({ places }) => {
    return (
        <TabBodyContainer title="行きたい場所リスト">
            <div>
            {
                places.map((place, index) => {
                    return <ListItem key={index}>{ place }</ListItem>
                })
            }
            </div>
        </TabBodyContainer>
    )
}