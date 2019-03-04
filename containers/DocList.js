import { connect } from "react-redux";
import ListView from "../components/listView";

const onPress = () => {
  // API
  var data = fetch(
    "https://storm-devdb.zoylo.com/zoylogateway-0.0.1-SNAPSHOT/zoylodoctor/zoylodoctor-0.0.1-SNAPSHOT/api/doctor-details/filters",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        criteria: "",
        gpsLatitude: 28.5103,
        gpsLongitude: 77.0921,
        size: "4",
        page: "0",
        distance: "",
        homeVisit: "",
        appointmentDate: "",
        appointmentTime: "",
        minFee: "",
        maxFee: "",
        onlineConsultation: "",
        gender: [],
        amenities: [""],
        minExperience: "",
        maxExperience: "",
        language: [],
        paymentOption: [""],
        rating: "",
        sortBy: ""
      })
    }
  )
    .then(response => response.json())
    .then(responseJson => {
      console.log("Data: ", responseJson);
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};

const mapStateToProps = (state) => ({
  isFetchingState: state.docReducer.isFetching,
  didInvalidateState: state.docReducer.didInvalidate,
  itemsState: state.docReducer.items,
});

const mapDispatchToProps = dispatch => ({
  // requestPosts: item => dispatch()
  doctors: item => dispatch(onPress())
});

const DocList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

export default DocList;
