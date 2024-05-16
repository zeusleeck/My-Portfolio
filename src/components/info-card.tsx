import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

interface InfoCardProps {
  id: any;
  icon: React.ElementType;
  title: string;
  date: string;
  children: React.ReactNode;
}

export function InfoCard({id, icon: Icon, title, date, children }: InfoCardProps) {
  return (
    <Card placeholder={undefined}>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible"
        floated={false}
        shadow={false} 
        placeholder={undefined}>
        <div className="flex flex-col gap-1 w-full">
          <Typography color="blue" className="font-bold text-xs" placeholder={undefined} >
            {date}
          </Typography>
          <Typography color="blue-gray" variant="h5" className="w-full" placeholder={undefined} >
            {title}
          </Typography>
        </div>
        <IconButton
          className="flex-shrink-0 pointer-events-none"
          ripple={false} placeholder={undefined}>
          <Icon className="h-5 w-5" strokeWidth={2} />
        </IconButton>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2" placeholder={undefined} >
        <Typography className=" font-normal !text-gray-500" style={{ wordWrap: "break-word" }} >
          {children}
          {title === "Simple Weather Application" ? 
            [
              <br key="br1" />,
              <br key="br2" />,
              <a key="project-link" href="https://weatherapplicationserver.azurewebsites.net/Weather">View Project</a>,
              <br key="br3" />,
              <a key="source-code-link" href="https://github.com/zeusleeck/WeatherApplication">View Source Code</a>
            ]: <a></a>}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
