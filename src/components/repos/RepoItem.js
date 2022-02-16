import React from 'react'
import PropTypes from 'prop-types';

const RepoItem = ({repo:{name, description}}) => {
  return (
    <div><h2>{name}</h2></div>
  )
}
RepoItem.propTypes = {
    user :  PropTypes.object.isRequired,
 }


export default RepoItem

