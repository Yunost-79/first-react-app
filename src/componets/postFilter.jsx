import React from 'react';

import MySelect from '../ui/select/mySelect';
import MyInput from '../ui/input/myInput';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput placeholder="Search..." value={filter.query} onChange={(e) => setFilter({ ...filter, query: e.target.value })} />

      <MySelect
        value={filter.sort}
        defaultValue="Sorting:"
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        option={[
          { value: 'title', name: 'by name ' },
          { value: 'body', name: 'by descrition ' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
