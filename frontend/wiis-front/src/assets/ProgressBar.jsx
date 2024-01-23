import React, {useEffect, useState} from "react";




function ProgressBar(props) {
  const [progress, setProgress] = useState([])
  useEffect(() => {
    async function progressBar() {
  /* using 20 to make the progress bar length 20 charactes, multiplying by 5 below to arrive to 100 */

    for (let i = 0; i <= 20; i++) {
      const dots = "#".repeat(i)
      const left = 20 - i
      const empty = ".".repeat(left)
      setProgress(`[${dots}${empty}] ${i * 5}%`)
      await wait(props.ms)
    }
  } 
  progressBar();
  function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
  }
  }, [])
  return (
    <span>{props.msg}{progress}</span>
  )
}

export default ProgressBar;