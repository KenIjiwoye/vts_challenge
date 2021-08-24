import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Results } from "../Results";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';


export const Lookup = () => {
  const [address, setAddress] = useState('')
  const handleChange = (address:string) => {
    setAddress(address)
  };

  const handleSelect = (address:string) => {
    geocodeByAddress(address)
      .then((results:any) => getLatLng(results[0]))
      .then((latLng:any) => console.log('Success', latLng))
      .catch((error:any) => console.error('Error', error));
  };
  return <div>
    <h1>VTS Demo App</h1>
    {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter an address</Form.Label>
        <Form.Control type="text" placeholder="Enter an address..." />
        <Form.Text className="text-muted">
          Ex. 123 Elm st,  ... New York, NY
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Lookup
  </Button>
    </Form> */}
    <hr/>
    <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }:any) => (
         <div>
         <input
           {...getInputProps({
             placeholder: 'Search Places ...',
             className: 'location-search-input form-control',
           })}
         />
         <div className="autocomplete-dropdown-container">
           {loading && <div>Loading...</div>}
           {suggestions.map((suggestion:any) => {
             const className = suggestion.active
               ? 'suggestion-item--active'
               : 'suggestion-item';
             // inline style for demonstration purpose
             const style = suggestion.active
               ? { backgroundColor: '#fafafa', cursor: 'pointer' }
               : { backgroundColor: '#ffffff', cursor: 'pointer' };
             return (
               <div
                 {...getSuggestionItemProps(suggestion, {
                   className,
                   style,
                 })}
               >
                 <span>{suggestion.description}</span>
               </div>
             );
           })}
         </div>
       </div>
     )}
      </PlacesAutocomplete>
    <hr/>
    <Results />
  </div>;
};
