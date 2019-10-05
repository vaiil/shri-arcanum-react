import { GET_TREE_FAILURE, GET_TREE_REQUEST, GET_TREE_SUCCESS } from '../actionTypes/tree'

export default (state = [], action) => {
  switch (action.type) {
    case GET_TREE_SUCCESS:
      const files = action.tree.filter(object => object.type === 'file')
      const dirs = action.tree.filter(object => object.type === 'dir')
      return { currentPath: action.path, files, dirs, loading: false }
    case GET_TREE_REQUEST:
      return { currentPath: action.path, files: [], dirs: [], loading: true }
    case GET_TREE_FAILURE:
      return { currentPath: action.path, error: action.reason }
    default:
      return state
  }
}
