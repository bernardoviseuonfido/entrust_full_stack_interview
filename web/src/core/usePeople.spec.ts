import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePeople } from './usePeople';

vi.mock('./people.json', () => ({
  default: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ],
}));

describe('usePeople', () => {
  it('should return the list of all the people', () => {
    const { result } = renderHook(() => usePeople());

    expect(result.current).toEqual([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ]);
  });
});
