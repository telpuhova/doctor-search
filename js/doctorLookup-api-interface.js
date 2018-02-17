import { apiKey } from './../.env';

function getAll() {
  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&limit=10&user_key=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $(".result").empty();
      if (response.data.length == 0) {
        $(".result").text(`No doctors in your area.`)
      }
      else {
        for (let i=0; i<10; i++) {
          let doctor = response.data[i];
          if (doctor.profile.hasOwnProperty('middle_name')) {
            $(".result").append(`<strong>${doctor.profile.first_name} ${doctor.profile.middle_name} ${doctor.profile.last_name} ${doctor.profile.title}</strong>`);
          } else {
            $(".result").append(`<strong>${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.profile.title}</strong>`);
          }
          $(".result").append(`<br>&emsp;practices: <br>`);
          for (let j=0; j<doctor.practices.length; j++) {
            if (doctor.practices[j].visit_address.hasOwnProperty('street2')) {
              $(".result").append(`&emsp;${doctor.practices[j].name}<br>
                &emsp;&emsp;accepts new patients: ${doctor.practices[j].accepts_new_patients}<br>
                &emsp;&emsp;${doctor.practices[j].visit_address.street} ${doctor.practices[j].visit_address.street2}, ${doctor.practices[j].visit_address.city}, ${doctor.practices[j].visit_address.state}, ${doctor.practices[j].visit_address.zip}<br>`);
                for (let k=0; k<doctor.practices[j].phones.length; k++) {
                  $(".result").append(`&emsp;&emsp;${doctor.practices[j].phones[k].type}:
                    ${doctor.practices[j].phones[k].number}<br>`);
                  }
                } else {
                  $(".result").append(`&emsp;${doctor.practices[j].name}<br>
                    &emsp;&emsp;accepts new patients: ${doctor.practices[j].accepts_new_patients}<br>
                    &emsp;&emsp;${doctor.practices[j].visit_address.street}, ${doctor.practices[j].visit_address.city}, ${doctor.practices[j].visit_address.state}, ${doctor.practices[j].visit_address.zip}<br>`);
                    for (let k=0; k<doctor.practices[j].phones.length; k++) {
                      $(".result").append(`&emsp;&emsp;${doctor.practices[j].phones[k].type}:
                        ${doctor.practices[j].phones[k].number}<br>`);
                    }
                }
            }
            $(".result").append(`<hr>`);
        }
      }
    },
    error: function() {
      $(".result").text(`error`);
    }
  })
}

function issueApiRequest(issue) {
  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&limit=10&user_key=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $(".result").empty();
      if (response.data.length == 0) {
        $(".result").text(`Your search - ${issue} - did not match any doctors.`)
      }
      else {
        for (let i=0; i<10; i++) {
          let doctor = response.data[i];
          if (doctor.profile.hasOwnProperty('middle_name')) {
            $(".result").append(`<strong>${doctor.profile.first_name} ${doctor.profile.middle_name} ${doctor.profile.last_name} ${doctor.profile.title}</strong>`);
          } else {
            $(".result").append(`<strong>${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.profile.title}</strong>`);
          }
          $(".result").append(`<br>&emsp;practices: <br>`);
          for (let j=0; j<doctor.practices.length; j++) {
            if (doctor.practices[j].visit_address.hasOwnProperty('street2')) {
              $(".result").append(`&emsp;${doctor.practices[j].name}<br>
                &emsp;&emsp;accepts new patients: ${doctor.practices[j].accepts_new_patients}<br>
                &emsp;&emsp;${doctor.practices[j].visit_address.street} ${doctor.practices[j].visit_address.street2}, ${doctor.practices[j].visit_address.city}, ${doctor.practices[j].visit_address.state}, ${doctor.practices[j].visit_address.zip}<br>`);
                for (let k=0; k<doctor.practices[j].phones.length; k++) {
                  $(".result").append(`&emsp;&emsp;${doctor.practices[j].phones[k].type}:
                    ${doctor.practices[j].phones[k].number}<br>`);
                  }
                } else {
                  $(".result").append(`&emsp;${doctor.practices[j].name}<br>
                    &emsp;&emsp;accepts new patients: ${doctor.practices[j].accepts_new_patients}<br>
                    &emsp;&emsp;${doctor.practices[j].visit_address.street}, ${doctor.practices[j].visit_address.city}, ${doctor.practices[j].visit_address.state}, ${doctor.practices[j].visit_address.zip}<br>`);
                    for (let k=0; k<doctor.practices[j].phones.length; k++) {
                      $(".result").append(`&emsp;&emsp;${doctor.practices[j].phones[k].type}:
                        ${doctor.practices[j].phones[k].number}<br>`);
                    }
                }
            }
            $(".result").append(`<hr>`);
        }
      }
    },
    error: function() {
      $(".result").text(`error`);
    }
  })
}

function nameApiRequest(name) {
  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&limit=10&user_key=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $(".result").empty();
      console.log(response);
      if (response.data.length == 0) {
        $(".result").text(`Your search - ${name} - did not match any doctors.`)
      }
      else {
        for (let i=0; i<10; i++) {
          let doctor = response.data[i];
          if (doctor.profile.hasOwnProperty('middle_name')) {
            $(".result").append(`<strong>${doctor.profile.first_name} ${doctor.profile.middle_name} ${doctor.profile.last_name} ${doctor.profile.title}</strong>`);
          } else {
            $(".result").append(`<strong>${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.profile.title}</strong>`);
          }
          $(".result").append(`<br>&emsp;practices: <br>`);
          for (let j=0; j<doctor.practices.length; j++) {
            if (doctor.practices[j].visit_address.hasOwnProperty('street2')) {
              $(".result").append(`&emsp;${doctor.practices[j].name}<br>
                &emsp;&emsp;accepts new patients: ${doctor.practices[j].accepts_new_patients}<br>
                &emsp;&emsp;${doctor.practices[j].visit_address.street} ${doctor.practices[j].visit_address.street2}, ${doctor.practices[j].visit_address.city}, ${doctor.practices[j].visit_address.state}, ${doctor.practices[j].visit_address.zip}<br>`);
                for (let k=0; k<doctor.practices[j].phones.length; k++) {
                  $(".result").append(`&emsp;&emsp;${doctor.practices[j].phones[k].type}:
                    ${doctor.practices[j].phones[k].number}<br>`);
                  }
                } else {
                  $(".result").append(`&emsp;${doctor.practices[j].name}<br>
                    &emsp;&emsp;accepts new patients: ${doctor.practices[j].accepts_new_patients}<br>
                    &emsp;&emsp;${doctor.practices[j].visit_address.street}, ${doctor.practices[j].visit_address.city}, ${doctor.practices[j].visit_address.state}, ${doctor.practices[j].visit_address.zip}<br>`);
                    for (let k=0; k<doctor.practices[j].phones.length; k++) {
                      $(".result").append(`&emsp;&emsp;${doctor.practices[j].phones[k].type}:
                        ${doctor.practices[j].phones[k].number}<br>`);
                    }
                }
            }
            $(".result").append(`<hr>`);
        }
      }
    },
    error: function() {
      $(".result").text(`error`);
    }
  })
}
