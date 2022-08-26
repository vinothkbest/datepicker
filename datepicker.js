jQuery( "#appmnt_date" ).datepicker({
        beforeShowDay: nationalDays,
        minDate: "+1D",
        maxDate: "+1M",
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true
    });
    
    //inside ajax
    
    jQuery("#appmnt_date").datepicker("destroy");
      jQuery( "#appmnt_date" ).datepicker({
          beforeShowDay: (date) =>{
              getdays =disabled_days.map(day => {
                  return parseInt(day)
              })
              return nationalDays(date, getdays)
          },
          minDate: "+1D",
          maxDate: "+1M",
          dateFormat: "dd-mm-yy",
          changeMonth: true,
          changeYear: true
      });
      
      function nationalDays(date, weekdays=[0, 6]) {
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        if(no_dates.indexOf(string)==-1){
            return [!(weekdays.includes(date.getDay())), 'weekends'];
        }
        else{
            return [no_dates.indexOf(string)==-1 , 'booked-dates'];
        }
    }
