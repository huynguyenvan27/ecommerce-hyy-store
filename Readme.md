### ExtraReducer là gì ?

- Đầu tiên, cần hiểu reduce là gì ? reducer trong redux gồm nhiều lớp slice có thể biến đổi state với các
  action type
- Extrareducer sẽ không tạo ra 1 funtion creator để thực thi các action type như trong reducer nó thường dụng để thực thi các action ở slice reducer khác
- Extrareducer sử các hàm builder.addCase, builder.addMatcher, and builder.addDefault
- [Action creators] có thể sử dụng trực tiếp ở trong extraReducer

```javascript
const incrementBy = createAction("incrementBy");

createSlice({
  name: "counter",
  initialState: 0,
  reducers: {},
  extraReducers: {
    [incrementBy]: (state, action) => {
      return state + action.payload;
    },
    "some/other/action": (state, action) => {},
  },
});
```
