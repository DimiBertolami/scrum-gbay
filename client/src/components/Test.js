import React, { useState, useEffect} from 'react';

function Test() {

  async function getData () {
      const url = 'http://localhost:3001/products';
      console.log(url)
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
  }



    return (
        <div>
            <h1>{}</h1>
        </div>
    );
}

export default Test;