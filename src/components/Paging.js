import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

function Paging({ handlePageChange, totalPages, page }) {
  return (
    <section className={styles.Paging}>
      <button
        onClick={() => handlePageChange(-1)}
        disabled={page === 1}
      >
        ⬸
      </button>
      <span>{page} / {totalPages}</span>
      <button
        onClick={() => handlePageChange(1)}
        disabled={page === totalPages}
      >
        ⤑
      </button>
    </section>
  );
}

Paging.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default Paging;

