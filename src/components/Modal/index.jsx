/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import { isFunction } from '../../utils/functions';

const Modal = ({ title, children, footerFormatter, show, onHide }) => {
  const ref = useRef(null);

  const onBackgroundClick = (event) => {
    if (event.target === ref.current) {
      onHide(false);
    }
  };

  return (
    show && (
    <div className="modal" ref={ref} onClick={onBackgroundClick}>
      <div className="modal__content">
        <div className="modal__header">
          <div className="modal__title">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="modal__body">
          {children}
        </div>
        <div className="modal__footer">
          {isFunction(footerFormatter) && footerFormatter()}
        </div>
      </div>
    </div>
    )
  );
};

Modal.defaultProps = {
  title: 'Header',
  footerFormatter: () => true,
  onHide: () => true,
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  footerFormatter: PropTypes.func,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
};

export default Modal;
