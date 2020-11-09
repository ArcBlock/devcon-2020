/* eslint-disable react/prop-types */
import React from 'react';

function UserScript({ async = false, src = '', children = null }) {
  React.useEffect(() => {
    let isScriptValid = false;
    const script = document.createElement('script');
    script.async = async;
    if (src) {
      script.src = src;
      isScriptValid = true;
    } else if (Array.isArray(children) && children.length > 0) {
      isScriptValid = true;
      script.innerHTML = children.join(';');
    }
    if (isScriptValid) {
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
    return () => {};
  }, []);
  return null;
}

const Gitter = ({ room }) => {
  React.useEffect(() => {
    ((window.gitter = {}).chat = {}).options = {
      showChatByDefault: false,
      room,
    };
  }, []);
  return (
    <div>
      <UserScript src="https://sidecar.gitter.im/dist/sidecar.v1.js" />
    </div>
  );
};

export default Gitter;
