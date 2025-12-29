import React from 'react';
import { useParams } from 'react-router';

function Profile() {
   let {id} = useParams();
  return (
    <div>
      profile
      <br />
      id :{id}
    </div>
  );
}

export default Profile;
