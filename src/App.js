import React, { useState, useEffect, useRef } from 'react';
import Search from './components/Search';
import Table from './components/Table';

function App() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   console.log(repos)
  // }, [repos])

  // useEffect(() => {
  //   console.log(loading)
  // }, [loading])

  const getReposData = (data) => {
    setRepos(data)
  }

  const getLoading = (load) => {
    setLoading(load)
  }

  return (
    <div>
      <Search reposData={getReposData} loading={getLoading} />
      <Table data={repos} loading={loading} />
    </div>
  );
}

export default App;
