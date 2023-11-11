# VLAN

## Definition

Virtual Local Area Network.
i.e. multiple networks are trafficked on one hardware network.


## Related Ideas

**LAN** ~ Local Area Network ~ this is the hardware that physical sends signals from one client to another.

**Virtual Network** ~ a virtual network is a purely software defined thing.
The only thing separating one packet on the physical network from another is the VLAN identifier (a number.)

**Tag** ~ a _tagged_ port has the VLAN ID added to the header of each packet.
Tagged packets are only understood by equipment that is 1) VLAN aware and 2) on that particular VLAN.
Untagged ports do not add the VLAN ID to packet headers on outgoing packets _and_ strip the VLAN IDs from incoming packet headers.


## Examples

e.g. four computers on the same physical network, two on one VLAN, and two on another VLAN.
Those on separate VLANs cannot communicate directly.
