'use client';
import { useRef, FormEvent, SetStateAction, Dispatch } from 'react';
export default function BirthDateForm({
  formData,
  setFormData,
}: {
  formData: {};
  setFormData: Dispatch<SetStateAction<{}>>;
}) {
  const yyyyInputRef = useRef(null);
  const MMInputRef = useRef(null);
  const ddInputRef = useRef(null);

  const getTimes = (start: number, end: number) => {
    const times = [];
    for (let time = start; time <= end; time++) {
      times.push(time.toString().padStart(2, '0'));
    }
    return times;
  };
  const hours = getTimes(1, 24);
  const minutes = getTimes(0, 60);

  const handleChange = (
    key: string,
    value: string,
    ref: React.RefObject<HTMLInputElement> | null,
  ) => {
    setFormData({ ...formData, [key]: value });
    if (ref) {
      if (key == 'yyyy' && value.length >= 4) {
        ref.current?.focus();
      } else if ((key == 'MM' || key == 'dd') && value.length >= 2) {
        ref.current?.focus();
      }
    }
  };

  const handleInput = (
    event: FormEvent<HTMLTextAreaElement>,
    field: string,
  ) => {
    const inputValue = event.currentTarget.value;
    if (field == 'yyyy') {
      if (inputValue.length <= 4) {
        setFormData({ ...formData, yyyy: inputValue });
      } else {
        event.currentTarget.value = inputValue.slice(0, 4);
      }
    } else if (field == 'MM') {
      if (inputValue.length <= 2) {
        setFormData({ ...formData, MM: inputValue });
      } else {
        event.currentTarget.value = inputValue.slice(0, 2);
      }
    } else if (field == 'dd') {
      if (inputValue.length <= 2) {
        setFormData({ ...formData, dd: inputValue });
      } else {
        event.currentTarget.value = inputValue.slice(0, 2);
      }
    }
  };

  return (
    <div>
      <div className="flex">
        <textarea
          ref={yyyyInputRef}
          id="outlined-basic"
          inputMode="numeric"
          rows={1}
          maxLength={5}
          onInput={(e) => handleInput(e, 'yyyy')}
          className="textarea"
          placeholder="YYYY"
          onChange={(e) => handleChange('yyyy', e.target.value, MMInputRef)}
        />
        <textarea
          ref={MMInputRef}
          id="outlined-basic"
          inputMode="numeric"
          rows={1}
          maxLength={5}
          onInput={(e) => handleInput(e, 'MM')}
          className="textarea"
          placeholder="MM"
          onChange={(e) => handleChange('MM', e.target.value, ddInputRef)}
        />
        <textarea
          ref={ddInputRef}
          id="outlined-basic"
          inputMode="numeric"
          rows={1}
          maxLength={5}
          onInput={(e) => handleInput(e, 'dd')}
          className="textarea"
          placeholder="DD"
          onChange={(e) => handleChange('dd', e.target.value, null)}
        />
      </div>
      <div className="flex">
        <select
          id="hhSelected"
          inputMode="text"
          onChange={(e) => handleChange('hh', e.target.value, null)}
          className="select m-1"
        >
          {hours.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <select
          id="hhSelected"
          inputMode="text"
          onChange={(e) => handleChange('mm', e.target.value, null)}
          className="select m-1"
        >
          {minutes.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
