import PrincipalContent from './PrincipalContent'
import SearchBar from './SearchBar'
import Today from './Today'
import NextDays from './NextDays'

const Main = () => {
  return (
    <div>
      <SearchBar />
      <div>
        <PrincipalContent />
        <Today />
        <NextDays />
      </div>
    </div>
  )
}

export default Main
