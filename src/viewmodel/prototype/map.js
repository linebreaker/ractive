import Mapping from 'shared/parameters/Mapping';

export default function Viewmodel$map ( key, options ) {
	var mapping = new Mapping( key, options );
	mapping.setViewmodel( this );
	return mapping;
}