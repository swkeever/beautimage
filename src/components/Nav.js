import React from 'react';
import {
  Menu, Icon, Input, Form,
} from 'semantic-ui-react';
import { animateScroll } from 'react-scroll';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import scrollOptionsType from '../types/scrollOptions';

const Nav = ({
  searchQuery,
  setSearchQuery,
  nightMode,
  setNightMode,
  columns,
  setColumns,
  initializePhotos,
  loading,
  history,
  scrollOptions,
}) => {
  const executeSearch = async (event) => {
    event.preventDefault();

    history.push('/');

    await initializePhotos();
  };

  const isHome = history.location.pathname === '/';
  const headerProps = isHome ? { onClick: () => animateScroll.scrollToTop(scrollOptions) } : { as: Link, to: '/' };

  return (
    <Menu compact borderless inverted={nightMode} fixed="top">
      <Menu.Item header {...headerProps}>
        <Icon name="image" />
        ImageExplorer
      </Menu.Item>
      <Menu.Item disabled={!isHome} active={columns === 1} onClick={() => setColumns(1)}>
        <Icon name="list layout" />
      </Menu.Item>
      <Menu.Item disabled={!isHome} active={columns === 2} onClick={() => setColumns(2)}>
        <Icon name="block layout" />
      </Menu.Item>
      <Menu.Item disabled={!isHome} active={columns === 3} onClick={() => setColumns(3)}>
        <Icon name="grid layout" />
      </Menu.Item>
      <Menu.Item>
        <Form onSubmit={executeSearch}>
          <Input
            id="search-input"
            loading={loading}
            transparent
            size="small"
            type="text"
            onChange={({ target }) => setSearchQuery(target.value)}
            value={searchQuery}
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
  string, func, bool, number,
} = PropTypes;

Nav.propTypes = {
  searchQuery: string.isRequired,
  setSearchQuery: func.isRequired,
  nightMode: bool.isRequired,
  setNightMode: func.isRequired,
  columns: number.isRequired,
  setColumns: func.isRequired,
  initializePhotos: func.isRequired,
  loading: bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  scrollOptions: scrollOptionsType.isRequired,
};

export default withRouter(Nav);
