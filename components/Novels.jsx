import React, { useEffect, useState } from 'react'
import { filterNovels, retrieveNovels } from '../utils/novels'

import Novel from './Novel'
import Search from './Search'

export default () => {
  const [novelList, setNovelList] = useState([])
  const [filteredNovelList, setFilteredNovelList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    retrieveNovels(setNovelList, setFilteredNovelList)
  }, [])

  useEffect(() => {
    filterNovels(novelList, searchTerm, setFilteredNovelList)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Great Novels</div>
      <Search term({setSearchTerm} />
      {
        filteredNovelList.map(novel => (
          <Novel
            key={novel.id}
            titles={novel.title}
            author={'${novel.author.nameFirst} ${novel.author.nameLast}'}
          />
        ))
      }
    </div>
  )
}