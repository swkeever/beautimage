import React, { useState } from 'react';
import {
  Menu, Icon, Input, Form, Responsive,
} from 'semantic-ui-react';
import { animateScroll } from 'react-scroll';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import scrollOptionsType from '../types/scrollOptions';

const Nav = ({
  setSearchQuery,
  nightMode,
  setNightMode,
  columns,
  setColumns,
  loading,
  history,
  scrollOptions,
}) => {
  const [search, setSearch] = useState('');

  const executeSearch = async (event) => {
    event.preventDefault();
    animateScroll.scrollToTop(scrollOptions);
    setSearchQuery(search);
    history.push('/');
  };

  const backHome = async () => {
    setSearch('');
    setSearchQuery('');
    history.push('/');
  };

  const isHome = history.location.pathname === '/';
  const linkBehavior = isHome ? () => animateScroll.scrollToTop(scrollOptions) : backHome;

  return (
    <Menu borderless inverted={nightMode} fixed="top">
      <Menu.Item header onClick={linkBehavior}>
        <Icon name="image" />
        <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
          beautimage
        </Responsive>
      </Menu.Item>
      <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
        <Menu secondary>
          <Menu.Item active={columns === 1} onClick={() => setColumns(1)}>
            <Icon name="list layout" />
          </Menu.Item>
          <Menu.Item active={columns === 2} onClick={() => setColumns(2)}>
            <Icon name="block layout" />
          </Menu.Item>
          <Menu.Item active={columns === 3} onClick={() => setColumns(3)}>
            <Icon name="grid layout" />
          </Menu.Item>
        </Menu>
      </Responsive>
      <Menu.Item>
        <Form onSubmit={executeSearch}>
          <Input
            id="search-input"
            loading={loading}
            transparent
            size="small"
            type="text"
            onChange={({ target }) => setSearch(target.value)}
            value={search}
            placeholder="Search..."
            icon={<Icon inverted={nightMode} name="search" link onClick={executeSearch} />}
          />
        </Form>
      </Menu.Item>
      <Menu.Item position="right" active={nightMode} onClick={() => setNightMode(!nightMode)}>
        <Icon name="moon" />
      </Menu.Item>
    </Menu>
  );
};

const {
  func, bool, number,
} = PropTypes;

Nav.propTypes = {
  setSearchQuery: func.isRequired,
  nightMode: bool.isRequired,
  setNightMode: func.isRequired,
  columns: number.isRequired,
  setColumns: func.isRequired,
  loading: bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  scrollOptions: scrollOptionsType.isRequired,
};

export default withRouter(Nav);
