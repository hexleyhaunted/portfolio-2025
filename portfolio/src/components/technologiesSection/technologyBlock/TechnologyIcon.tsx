import UnknownIcon from '../../../assets/technology-icons/close-icon.svg';

export default function TechnologyIcon({Icon}: {Icon: string | undefined}) {
    return <>{Icon !== undefined ? <Icon/> : <UnknownIcon/>}</>
}