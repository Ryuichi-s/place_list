import styled from "styled-components";
import { useEffect, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getPlaces,  } from "./const/places";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`

function App() {
  const [tab, setTab] = useState('list');
  const [places, setPlaces] = useState([]);

  useEffect (() => {
    fetchPlaces();
  }, [])

  const fetchPlaces = async () => {
    const places = await getPlaces();
    setPlaces(places);
  }


  const addPlace = (place) => {
    setPlaces([...places, place]);
    setTab('list');
  }

  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>リスト</HeaderLi>
          <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>フォーム</HeaderLi>
        </HeaderUl>
      </Header>
      {
        tab === 'list' ? <List places={places} /> : <Form onAddPlace={addPlace} />
      }
    </div>
  );
}

export default App;
