Repro case for mrnocreativity/postcss-critical-split.  

See [Issue](https://github.com/jonax/postcss-critical-split-issue-10) for more details.  

### Usage

```
cd setup
npm install
gulp
```

Package is set up to output `critical` & `rest` output via the default Gulp task, utilising parallel subtasks for each.  Input case is in `src/input.css`, and gets output into the `dest/` directory.  

Tasks are dynamically named based on the `output` value provided to it.  Which modes are utilised can be modified via the `MODES` array at the top of gulpfile.babel.js.

"Control case" CSS rules have been added to verify correct output (`.control-critical` should only appear in `critical.css`, while `.control-rest` should only appear in `rest.css`).  