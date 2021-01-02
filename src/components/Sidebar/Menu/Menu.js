// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          {/* Using Outsource link cause 404 issues */}
          {/* so <a> is used on Newsletter */}
          {item.label === 'Newsletter'
            ? <a
              className={styles['menu__list-item-link']}
              href={item.path}
              activeClassName={styles['menu__list-item-link--active']}
              target={'_blank'}
            >
              {item.label}
            </a>
            : <Link
              to={item.path}
              className={styles['menu__list-item-link']}
              activeClassName={styles['menu__list-item-link--active']}
            >
              {item.label}
            </Link>}
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;