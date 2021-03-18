import React, { memo, useEffect } from 'react'
import { connect,shallowEqual,useDispatch,useSelector } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function LDRecommend(props) {

  //组件和redux关联：获取数据和进行操作
  const {topBanners} = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend","topBanners"])
  }),shallowEqual)
  const dispatch = useDispatch()

  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  },[dispatch])

  return (
    <div>
      LDRecommend,{topBanners.length}
    </div>
  )
}

export default memo(LDRecommend)









// function LDRecommend(props) {
//   const {getBanners,topBanners} = props;
//   useEffect(() =>{
//     getBanners();
//   },[getBanners])

//   return (
//     <div>
//       LDRecommend,{topBanners.length}
//     </div>
//   )
// }

// const mapStateToProps = state =>({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch =>({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(LDRecommend))