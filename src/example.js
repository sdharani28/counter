import React from 'react';

import API from '../api';

export default class PersonRemove extends React.Component {
  // ...

  handleSubmit = async (event) => {
    event.preventDefault();

    const response = await API.delete(`users/${this.state.id}`);
    const responseData = await response.data;
    
    console.log(response);
    console.log(response.data);
  }

  // ...
}