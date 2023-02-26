const getWheresSQL = (obj) => {
  let where = ``;
  for (let [key, value] of Object.entries(obj)) {
    if (value.val) {
      if (where.length > 0) {
        where += 'and';
      }

      if (value.type === 'enum') {
        where += ` ${value.column} in ('${value.val}') `;
      } else if (value.type === 'date') {
        where += ` cast(${value.column} as DATE) = '${new Date(value.val).toISOString().slice(0, 10)}%' `;
      } else if (value.type === 'int') {
        where += ` ${value.column} LIKE '%${value.val}%' `;
      } else if (value.type === 'bool') {
        where += ` ${value.column} = '${value.val}' `;
      } else {
        where += ` lower(${value.column}) LIKE lower('%${value.val}%') `;
      }
    }
  }
  return where;
};

const getWheresPost = (obj, type) => {
  let where = '';
  for (let [key, value] of Object.entries(obj)) {
    if (value.val && value.val !== "'undefined' AND 'undefined'") {
      if (where.length === 0) {
        where += ' and (';
      } else {
        where += type;
      }
      if (value.type === 'enum') {
        where += ` ${value.column} in (${value.val}) `;
      } else if (value.type === 'date') {
        where += ` Cast(${value.column} as DATE) between ${value.val} `;
      } 
       else if (value.type === 'int') {
        where += ` cast(${value.column} as TEXT) LIKE '%${value.val}%' `;
      } else if (value.type === 'string') {
        where += ` Lower(${value.column}) Like Lower('%${value.val}%') `;
      }
    }
    if (type === 'or') {
      where = where.replace(`or Cast(${value.column} as DATE) = '${value.val}' `, '');
    }
  }
  if (where.length > 0) {
    where += ' )';
  }
  return where;
};

module.exports = { getWheresSQL, getWheresPost };
