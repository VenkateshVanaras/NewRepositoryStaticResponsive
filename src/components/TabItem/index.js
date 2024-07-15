import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabId, activeTabId} = props
  const {displayText, tabId} = tabDetails
  const onChangeTabId = () => {
    changeTabId(tabDetails.tabId)
  }

  return (
    <>
      {tabId === activeTabId ? (
        <li className="tab-item-container">
          <button
            type="button"
            onClick={onChangeTabId}
            className="active-tab-btn tab-btn"
          >
            {displayText}
          </button>
        </li>
      ) : (
        <li className="tab-item-container ">
          <button type="button" onClick={onChangeTabId} className="tab-btn">
            {displayText}
          </button>
        </li>
      )}
    </>
  )
}

export default TabItem
