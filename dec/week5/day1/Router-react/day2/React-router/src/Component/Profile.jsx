import React from 'react';
import { useSearchParams } from 'react-router';

function Profile() {
    let [searchparam] = useSearchParams()

    let search = searchparam.get("search");
    let cata = searchparam.get("cata");

    console.log(search)
    console.log(cata)

  return (
    <div>
      Profile
      <br />
      {/* id {id} */}
    </div>
  );
}

export default Profile;
