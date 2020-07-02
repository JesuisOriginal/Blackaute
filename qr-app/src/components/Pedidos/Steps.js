import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Saindo Pra Entrega', 'Chegou no Bar', 'Saiu do Bar', 'Retornou a Ekäut'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `O Pedido saiu da Ekaut as (x)`;
    case 1:
      return 'Pedido Chegou no Beer Dock as 12:34';
    case 2:
      return `Os Barris voltaram do Bar`;
    case 3:
      return 'Voltou Ekäut';
    default:
      return 'Em direção do bar';
  }
}

function setStep(status) {
  switch (status) {
    case "Saindo Pra Entrega": 
      return 0;
    case "Chegou no Bar":
      return 1;
    case "Saiu do Bar":
      return 2;
    case "Retornou a Ekäut":
      return 3;
    default:
      return 0;
  }
}

export default function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(setStep(props.status));
  const steps = getSteps();

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(setStep(props.status))}</Typography>
              {/* <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
