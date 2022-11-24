package com.practise.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
public class Home {
	
	public Home(){
System.out.println("connected to home");		
	}
	private String owner;
	private int doorNo;
	@Autowired
	@Qualifier("ABC")
	private internetconnection modem;
	
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public int getDoorNo() {
		return doorNo;
	}
	public void setDoorNo(int doorNo) {
		this.doorNo = doorNo;
	}
public void connect()
{
	modem.switchOn();
	System.out.println("Connecting to internet");
	}
}	
