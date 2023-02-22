import { Subs } from '../interfaces/subs'
interface Props {
  //children: JSX.Element or JSX.Element[] or string or etc...
  subs: Subs[]
}
/*
For functions that return HTMLElements, it can be type as:
    - JSX.Element <default>
    - React.FunctionComponent<Props>
*/
export const List: React.FunctionComponent<Props> =   ({ subs }:Props) => {
  return (
    <ul>
      {
        subs.map(sub => {
          return (
            <li
              key={sub.nick}
            >
              <img src={sub.avatar} alt={sub.nick}/>
              <h4>{sub.nick} <small>[{sub.subMonths}]</small></h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          )
        })
      }
    </ul>
  )
}