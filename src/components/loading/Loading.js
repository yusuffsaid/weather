import React from "react"
import ContentLoader from "react-content-loader"
const Loading = (props) => (
    
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <ContentLoader viewBox="0 0 260 160" height={500} width={500} {...props}>
        <rect x="10" y="50" rx="3" ry="3" width="100" height="10" />
      <rect x="10" y="70" rx="3" ry="3" width="40" height="10" />
      <rect x="60" y="70" rx="3" ry="3" width="70" height="10" />
      <rect x="140" y="70" rx="3" ry="3" width="20" height="10" />
      <rect x="10" y="90" rx="3" ry="3" width="90" height="10" />
      <rect x="110" y="90" rx="3" ry="3" width="70" height="10" />
      <rect x="10" y="110" rx="3" ry="3" width="70" height="10" />
      <rect x="90" y="110" rx="3" ry="3" width="60" height="10" />
    </ContentLoader>
    </div>
)
export default Loading
