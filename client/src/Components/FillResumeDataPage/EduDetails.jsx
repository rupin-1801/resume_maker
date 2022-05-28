import { Stack, TextField, Typography, Select, MenuItem, Button } from '@mui/material';
import React, { useState } from 'react'
import styledC from "styled-components";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
function EduDetails({ eduDetails, setEduDetails }) {
  const [edit, setEdit] = useState(false);
  const handleChange = (field) => (e) => {
    e.preventDefault();
    setEdu({ ...edu, [field]: e.target.value });
  }
  const [edu, setEdu] = useState({
    degree: "",
    organisation: "",
    city: "",
    startMonth: "January",
    startYear: "2022",
    endMonth: "January",
    endYear: "2022",
  });

  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ]

  const years = []
  let date = new Date();
  let curYear = date.getFullYear();
  for (let i = 1950; i < curYear + 5; i++) {
    years.push(i);
  }
  const handleAddElement = (e) => {
    e.preventDefault();
    const f = document.getElementById("form");
    f.checkValidity();
    if (f.reportValidity()) {

      setEduDetails([...eduDetails, edu]);
      setEdit(false);
      setEdu({
        degree: "",
        organisation: "",
        city: "",
        startMonth: "January",
        startYear: "2022",
        endMonth: "January",
        endYear: "2022"
      })
    }
  }

  const handleEdit = (indx) => {
    let temp=eduDetails;
    let newTemp = [];
    if(edit){
      temp = [...temp, edu];
    }
    setEdit(true);
    for (let i = 0; i < temp.length; i++) {
      if(i !== indx) {
        newTemp.push(temp[i]);
      }
      else{
        setEdu(temp[i]);
      }
    }
    setEduDetails(newTemp);
  }
  function handleDelete(indx) {
    let temp=eduDetails;
    let newTemp = [];
    
    for (let i = 0; i < temp.length; i++) {
      if(i !== indx) {
        newTemp.push(temp[i]);
      }
    }
    setEduDetails(newTemp); 
  }
  return (
    <Stack direction="row" spacing={5} style={{ height: "85%", display: "flex", justifyContent: `${(eduDetails && eduDetails.length > 0)?"space-between":"center"}` }}>
      <FormContainer action="" id="form">
          <h1 style={{ color: "#006370", textAlign: "center", margin: "0px" }}>Educational Details</h1>
          <Stack spacing={2} >
            <TextField
              variant="outlined"
              required
              id="education"
              label="Education"
              name="education"
              autoComplete="education"
              size="small"
              fullWidth
              value={edu.degree}
              autoFocus
              sx={{ color: "#006370" }}
              onChange={handleChange('degree')}
            >
            </TextField>
            <Stack direction="row" spacing={3}>
              <TextField
                variant="outlined"
                required
                id="schoolName"
                label="School Name"
                name="schoolName"
                autoComplete="name"
                size="small"
                fullWidth
                value={edu.organisation}
                // autoFocus
                sx={{ color: "#006370" }}
                onChange={handleChange('organisation')}
              />
              <TextField
                variant="outlined"
                required
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                size="small"
                fullWidth
                value={edu.city}
                // autoFocus
                sx={{ color: "#006370" }}
                onChange={handleChange('city')}
              />
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={2}>
              <Typography>
                Start
              </Typography>
              <Stack direction='row' spacing={3}>
                <Select
                  id="sMonth"
                  // label="Board"
                  value={edu.startMonth}
                  required
                  size="small"
                  fullWidth
                  onChange={handleChange('startMonth')}
                >
                  {
                    months.map((month) => (
                      <MenuItem
                        key={month}
                        value={month}
                      >
                        {month}
                      </MenuItem>
                    ))
                  }
                </Select>
                <Select
                  id="sYear"
                  value={edu.startYear}
                  required
                  size="small"
                  fullWidth
                  onChange={handleChange('startYear')}
                >
                  {
                    years.map((year) => (
                      <MenuItem
                        key={year}
                        value={year}
                      >
                        {year}
                      </MenuItem>
                    ))
                  }
                </Select>

              </Stack>
            </Stack>
            <Stack spacing={2}>
              <Typography>
                End
              </Typography>
              <Stack direction='row' spacing={3}>
                <Select
                  id="eMonth"
                  // label="Board"
                  value={edu.endMonth}
                  required
                  size="small"
                  fullWidth
                  onChange={handleChange('endMonth')}
                >
                  {
                    months.map((month) => (
                      <MenuItem
                        key={month}
                        value={month}
                      >
                        {month}
                      </MenuItem>
                    ))
                  }
                </Select>
                <Select
                  id="eYear"
                  // label="Board"
                  value={edu.endYear}
                  required
                  size="small"
                  fullWidth
                  onChange={handleChange("endYear")}
                >
                  {
                    years.map((year) => (
                      <MenuItem
                        key={year}
                        value={year}
                      >
                        {year}
                      </MenuItem>
                    ))
                  }
                </Select>

              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={2} style={{ display: "flex", alignItems: "center"}}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#006370" }}
              onClick={handleAddElement}
              type="submit"
            >
              <AddRoundedIcon />ADD Education
            </Button>
          </Stack>
      </FormContainer >
      {(!eduDetails || eduDetails.length === 0)?<span/>:(<ExtraElements>
        <div className="extraElements">
          {eduDetails.map((val, indx) => (

            <div className='ee-e' key={val.degree+indx}>
              <span style={{ color: "grey" }}>{val.degree}</span>
              <div>
                <Button
                  variant="contained"
                  size="small"
                  name={val.degree}
                  style={{ color: "#006370", background: "white" }}
                  onClick={() => handleEdit(indx)}
                ><EditRoundedIcon sx={{pointerEvents:"none"}}/></Button>
                <Button
                  variant="contained"
                  size="small"
                  name={val.degree}
                  style={{ color: "red", background: "white", zIndex: 900 }}
                  onClick={() => handleDelete(indx)}
                ><DeleteOutlineRoundedIcon sx={{ pointerEvents: "none" }} /></Button>
              </div>
            </div>
          ))}
        </div>
      </ExtraElements>)}
    </Stack>
  )
}
const FormContainer = styledC.form`
  display:flex;
  flex-direction:column;
  height: 85%;
  border-radius:10px;
  box-shadow: 0 0px 22px 2px #bcbcbc77;
  padding:20px;
  margin-top:50px;
  margin-left:50px;
  justify-content: space-evenly;
  box-sizing: border-box;
  width:50vw;
  margin-bottom:15px;
  min-height:60vh;
  max-height:70vh;
}
`;
const ExtraElements = styledC.div`
  width:40vw;
  .extraElements{
    margin-top:50px;
    margin-right:50px;
    gap:1rem;
    min-height:60vh;
    max-height:70vh;
    padding:5px 20px;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    .ee-e{
      width:100%;
      height:fit-content;
      position:relative;
      overflow:hidden;
      border-radius:10px;
      box-shadow:0 0 9px 3px #ede8e8;
      font-size:25px;
      text-indent:15px;
      padding:2px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      div{
        overflow:hidden;
        height:40px;
        display:flex;
        align-items:center;
        Button{
          margin:0 5px;
          position:relative;
          border-radius:100%;
          width:35px;
          height:35px;
          min-width:0;
        }
      }
    }

  }
`;

export default EduDetails