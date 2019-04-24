import { Component } from '@angular/core';

@Component({
  selector: 'cui-ng-select', // tslint:disable-line
  templateUrl: './cui-ng-select.component.html',
  styleUrls: ['../../../vendor/libs/ng-select/ng-select.scss']
})
export class CuiNgSelectComponent {
  disabled = false;
  selectOptions = [ // tslint:disable
    { value: 'AL', label: 'Alabama', timezone: 'Central Time Zone', flag: '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { value: 'AK', label: 'Alaska', timezone: 'Alaskan/Hawaiian Time Zone', flag: 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { value: 'AZ', label: 'Arizona', timezone: 'Mountain Time Zone', flag: '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png', disabled: true },
    { value: 'AR', label: 'Arkansas', timezone: 'Central Time Zone', flag: '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { value: 'CA', label: 'California', timezone: 'Pacific Time Zone', flag: '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { value: 'CO', label: 'Colorado', timezone: 'Mountain Time Zone', flag: '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { value: 'CT', label: 'Connecticut', timezone: 'Eastern Time Zone', flag: '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { value: 'DE', label: 'Delaware', timezone: 'Eastern Time Zone', flag: 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png', disabled: true },
    { value: 'FL', label: 'Florida', timezone: 'Eastern Time Zone', flag: 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    { value: 'GA', label: 'Georgia', timezone: 'Eastern Time Zone', flag: '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png' },
    { value: 'HI', label: 'Hawaii', timezone: 'Alaskan/Hawaiian Time Zone', flag: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { value: 'IA', label: 'Iowa', timezone: 'Central Time Zone', flag: 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { value: 'ID', label: 'Idaho', timezone: 'Mountain Time Zone', flag: 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { value: 'IL', label: 'Illinois', timezone: 'Central Time Zone', flag: '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { value: 'IN', label: 'Indiana', timezone: 'Eastern Time Zone', flag: 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { value: 'KS', label: 'Kansas', timezone: 'Central Time Zone', flag: 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { value: 'KY', label: 'Kentucky', timezone: 'Central Time Zone', flag: '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { value: 'LA', label: 'Louisiana', timezone: 'Central Time Zone', flag: 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { value: 'MA', label: 'Massachusetts', timezone: 'Eastern Time Zone', flag: 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { value: 'MD', label: 'Maryland', timezone: 'Eastern Time Zone', flag: 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { value: 'ME', label: 'Maine', timezone: 'Eastern Time Zone', flag: '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { value: 'MI', label: 'Michigan', timezone: 'Eastern Time Zone', flag: 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { value: 'MN', label: 'Minnesota', timezone: 'Central Time Zone', flag: 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { value: 'MO', label: 'Missouri', timezone: 'Central Time Zone', flag: '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { value: 'MS', label: 'Mississippi', timezone: 'Central Time Zone', flag: '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { value: 'MT', label: 'Montana', timezone: 'Mountain Time Zone', flag: 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { value: 'NC', label: 'North Carolina', timezone: 'Eastern Time Zone', flag: 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { value: 'ND', label: 'North Dakota', timezone: 'Mountain Time Zone', flag: 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { value: 'NE', label: 'Nebraska', timezone: 'Mountain Time Zone', flag: '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { value: 'NH', label: 'New Hampshire', timezone: 'Eastern Time Zone', flag: '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { value: 'NJ', label: 'New Jersey', timezone: 'Eastern Time Zone', flag: '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { value: 'NM', label: 'New Mexico', timezone: 'Mountain Time Zone', flag: 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { value: 'NV', label: 'Nevada', timezone: 'Pacific Time Zone', flag: 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { value: 'NY', label: 'New York', timezone: 'Eastern Time Zone', flag: '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { value: 'OH', label: 'Ohio', timezone: 'Eastern Time Zone', flag: '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { value: 'OK', label: 'Oklahoma', timezone: 'Central Time Zone', flag: '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { value: 'OR', label: 'Oregon', timezone: 'Pacific Time Zone', flag: 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { value: 'PA', label: 'Pennsylvania', timezone: 'Eastern Time Zone', flag: 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { value: 'RI', label: 'Rhode Island', timezone: 'Eastern Time Zone', flag: 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { value: 'SC', label: 'South Carolina', timezone: 'Eastern Time Zone', flag: '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { value: 'SD', label: 'South Dakota', timezone: 'Central Time Zone', flag: '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { value: 'TN', label: 'Tennessee', timezone: 'Central Time Zone', flag: '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { value: 'TX', label: 'Texas', timezone: 'Central Time Zone', flag: 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { value: 'UT', label: 'Utah', timezone: 'Mountain Time Zone', flag: 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { value: 'VA', label: 'Virginia', timezone: 'Eastern Time Zone', flag: '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { value: 'VT', label: 'Vermont', timezone: 'Eastern Time Zone', flag: '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { value: 'WA', label: 'Washington', timezone: 'Pacific Time Zone', flag: '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { value: 'WI', label: 'Wisconsin', timezone: 'Central Time Zone', flag: '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { value: 'WV', label: 'West Virginia', timezone: 'Eastern Time Zone', flag: '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { value: 'WY', label: 'Wyoming', timezone: 'Mountain Time Zone', flag: 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
  ]; // tslint:enable

  singleSelectValue: any;
  multipleSelectValue: Array<any> = [];
}
