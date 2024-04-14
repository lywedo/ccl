'use client';

import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { IconButton, InputBase } from '@mui/material';

function samePageLinkNavigation(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      className=" ml-16"
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

export default function Home() {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState<string>('10');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event as React.MouseEvent<HTMLAnchorElement, MouseEvent>))
    ) {
      setValue(newValue);
    }
  };

  return (
    <div className="flex-col">
      <div className="  row-span-1 flex h-auto w-full items-center">
        <div className=" ml-5 mr-6">Summary</div>
        <Tabs value={value} onChange={handleChange} role="navigation">
          <LinkTab label="Compute" href="/drafts" />
          <LinkTab label="Storage" href="/trash" />
          <LinkTab label="Web Apps" href="/spam" />
          <LinkTab label="Networks" href="/spam" />
          <LinkTab label="Providers" href="/spam" />
        </Tabs>
      </div>
      <div className=" h-0.5 w-full bg-slate-300"></div>
      <div className="flex">
        <Select
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.MuiOutlinedInput-root': {
              backgroundColor: 'transparent',
            },
            fontSize: '1.5rem',
          }}
          className="ml-4 "
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleSelectChange}
        >
          <MenuItem defaultChecked={true} value={10}>
            Vault
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <div className="ml-80 flex h-10 self-center rounded-full border border-gray-500">
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </div>
        <button className=" ml-6 h-10 self-center rounded-full bg-green-600 px-5 text-white">Billing Trend</button>
        <button className=" ml-6 h-10 self-center rounded-full bg-green-600 px-5 text-white">Quantity Trend</button>
        <button className=" ml-6 h-10 self-center rounded-full bg-green-600 px-5 text-white">
          Create Storage Account
        </button>
      </div>
      <div className="grid h-96 grid-rows-9 text-xl">
        <Item
          className="row-span-2"
          SA="Storage Account"
          Ver="Version"
          AK="Access Key"
          BC="Bucket Count"
          Size="Size(GB)"
          Act="Action"
        />
        <div className=" h-0.5 w-full bg-slate-300"></div>
        <Item className="row-span-1" SA="01_alpha_" Ver="Vault V2" AK="(multiple)" BC="0" Size="0.00" Grey={true} />
        <Item className="row-span-1" SA="Acc1Nov16" Ver="Vault v2" AK="+++++++++" BC="2" Size="3.54" />
        <Item className="row-span-1" SA="account002" Ver="Vault v2" AK="+++++++++" BC="1" Size="0.00" Grey={true}/>
        <Item className="row-span-1" SA="AccounmtLuck_356" Ver="Vault v2" AK="+++++++++" BC="3" Size="0.00" />
        <Item className="row-span-1" SA="apptest" Ver="Vault v2" AK="" BC="0" Size="0.00" Grey={true}/>
        <Item className="row-span-1" SA="CustomerTest" Ver="Vault v1" AK="+++++++++" BC="3" Size="1.02" />
        <Item className="row-span-1" SA="Storage Account" Ver="Vault v1" AK="(multiple)" BC="7" Size="0.00" Grey={true}/>
      </div>
    </div>
  );
}

interface ItemProp {
  SA: string;
  Grey?: boolean
  Ver: string;
  AK: string;
  BC: string;
  Size: string;
  Act?: string;
}

const Item = ({ SA, Ver, AK, BC, Size, Act, Grey, className }: ItemProp & { className?: string }) => {
  return (
    <div className={` px-10 grid grid-cols-6 gap-6 ${className} ${Grey ? ' bg-gray-200' : ''}`}>
      <div>{SA}</div>
      <div>{Ver}</div>
      <div>{AK}</div>
      <div>{BC}</div>
      <div>{Size}</div>
      {Act ? (
        <div>{Act}</div>
      ) : (
        <div className="flex items-center gap-4">
          <KeyIcon />
          <SearchIcon />
          <LoyaltyIcon />
          <DeleteIcon />
        </div>
      )}
    </div>
  );
};
