import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSchemeDetails } from "../../store/actions/schemeActions";
import Navigation from "../Navigation/Navigation";
const Scheme = () => {
  const {id} = useParams('id')
  const dispatch = useDispatch()
  const schemeDetails = useSelector(state => state.scheme);
  useEffect(() => {
    dispatch(fetchSchemeDetails(id))
  }, [id, dispatch]);
  const displayDetails = (data) => {
    return Object.keys(data).map((key) => {
        return <p key={key}>{`${key}: ${data[key]}`}</p>
    })
  }
  return id && schemeDetails && 
  <>
  <Navigation />
  <h1 style={{textAlign: "center"}}>Navi Nifty 50 Index Fund-Direct Plan-Growth</h1>
  <div style={{border: "1px solid", textAlign: "center", width: "50%", margin: "auto"}}>
      <h3>Scheme Details</h3>
      {displayDetails(schemeDetails)}
  </div>
  </>
};
export default Scheme;
