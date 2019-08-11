import React from 'react';
import {
  Menu, MenuHeader, Icon, Dropdown, Input, Form, Button,
} from 'semantic-ui-react';
import { animateScroll } from 'react-scroll';
import { withRouter } from 'react-router-dom';
import photoService from '../services/photos';

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
  const headerProps = isHome ? { onClick: () => animateScroll.scrollToTop(scrollOptions) } : { href: '/' };

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
            inverted={nightMode}
            loading={loading}
            transparent
            size="small"
            type="text"
            onChange={({ target }) => setSearchQuery(target.value)}
            value={searchQuery}
            placeholder="Search..."
            icon={<Icon name="search" link onClick={executeSearch} />}
          />
        </Form>
      </Menu.Item>
      <Menu.Item position="right" active={nightMode} onClick={() => setNightMode(!nightMode)}>
        <Icon name="moon" />
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(Nav);
