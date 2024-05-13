/* 조건부 Redirect 만들기 */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate(); // 조건부 이동을 위한 훅을 생성
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // 여기에서 어떤 로직을 수행한 후에 리다이렉트를 결정합니다.
    // 예를 들어, 특정 API를 호출하거나, 특정 상태를 체크하는 등의 작업을 수행할 수 있습니다.
    // 그 결과에 따라 shouldRedirect 상태를 설정합니다.

    if ( /* 여기에 리다이렉트를 결정하는 로직을 넣으세요 */ ) {
      setShouldRedirect(true);
    }
  }, []);

  // 상태에 따라 리다이렉트를 수행합니다.
  if (shouldRedirect) {
    navigate('/'); // 조건에 따라 이동할 path
  }

  return (
    <div>
      <p> Not Found Page </p>
    </div>
  );
};

export default NotFound;